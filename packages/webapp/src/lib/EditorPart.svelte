<div class='editor-part'>
    {#if ($noUnitAvailable)}
        <div class="message">
        <div class="mdc-typography--subtitle1">
            Please, select, create, or import Unit to be shown.
        </div>
            </div>
    {:else}
        <FreonComponent editor={EducationEnvironment.getInstance().editor}/>
    {/if}
</div>

<script lang="ts">
    import { FreonComponent } from "@freon4dsl/core-svelte";
    import { noUnitAvailable } from '$lib/stores/ModelStore';
    import { EducationEnvironment } from 'education-dsl/src/freon/config/gen/EducationEnvironment';
    import { InMemoryModel, LionWebRepositoryCommunication, ServerCommunication } from '@freon4dsl/core';
    import { Education, Topic } from 'education-dsl/dist/freon';

    async function getAllModels() {
        let server = new ServerCommunication();
        // let server = new LionWebRepositoryCommunication();
        let inMemoryModel: InMemoryModel = new InMemoryModel(EducationEnvironment.getInstance(), server);
        let originalModel: Education = (await inMemoryModel.createModel("ServerModel")) as Education;
        console.log(originalModel.name);
        let unit = new Topic("UNIT34")
        originalModel.addUnit(unit);
        console.log("UNIT: "+ originalModel.getUnits().length + ", unit: " + originalModel.getUnits()[0].name)
        console.log("topics: " + originalModel.topic.map(u => u.$id))
        await inMemoryModel.saveUnit(unit);

        // const allModels = (await inMemoryModel.getModels()) as string[];
        //
        // const model1 = (await inMemoryModel.openModel(allModels[0])) as Education;
        // console.log("Models: " + allModels.map(model => model) + "\n Opening model: " + allModels[0]);
        // let unit = model1.getUnits()[0];

    }
    getAllModels();
</script>

<style>
    .editor-part {
        height: 100%;
        box-sizing: border-box;
        padding:  0px 4px 4px 4px; /* top padding is 0 because the progress indicator uses 4px height */
    }
    .message {
        margin: 30px;
        text-align: center;
    }
</style>
