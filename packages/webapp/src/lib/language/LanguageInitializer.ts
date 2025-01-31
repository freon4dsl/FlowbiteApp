import {
    fileExtensions,
    languageName,
    projectionNames,
    projectionsShown,
    unitTypes,
} from "$lib/stores/LanguageStore.js";
import { FreLanguage, FreUndoManager, type FreEnvironment } from "@freon4dsl/core";
import { setUserMessage } from "$lib/stores/UserMessageStore.js";
import { WebappConfigurator } from "$lib/language/WebappConfigurator.js";

export class LanguageInitializer {
    /**
     * Fills the Webapp Stores with initial values that describe the language,
     * and make sure that the editor is able to get user message to the webapp.
     */
    static initialize(): void {
        let langEnv: FreEnvironment | undefined = WebappConfigurator.getInstance().editorEnvironment;
        if (langEnv !== undefined) {
            // the language name
            languageName.set(langEnv.languageName);

            // the names of the unit types
            unitTypes.set(FreLanguage.getInstance().getUnitNames());

            // the file extensions for all unit types
            // because 'langEnv.fileExtensions.values()' is not an Array but an IterableIterator,
            // we transfer the value to a tmp array.
            const tmp: string[] = [];
            for (const val of langEnv.fileExtensions.values()) {
                tmp.push(val);
            }
            fileExtensions.set(tmp);

            // the names of the projections / views
            const proj = langEnv.editor.projection;
            let nameList: string[] = !!proj ? proj.projectionNames() : ["default"];
            projectionNames.set(nameList);
            projectionsShown.set(nameList); // initialy, all projections are shown

            // let the editor know how to set the user message,
            // we do this by assigning our own method to the editor's method
            langEnv.editor.setUserMessage = setUserMessage;

            // start the undo manager
            FreUndoManager.getInstance();
        } else {
            console.log("No Language environment found");
        }
    }
}
