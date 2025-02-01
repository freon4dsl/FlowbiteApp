/*
 * This files contains all initialization that needs to be done ONCE at the startup of the Freon application
 */
import { configureExternals, configureLoggers, LanguageEnvironment } from "@mono/education";
import { WebappConfigurator } from "$lib/language/WebappConfigurator.js";
import { ServerCommunication } from "@freon4dsl/core";

WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());
configureExternals();
configureLoggers();
