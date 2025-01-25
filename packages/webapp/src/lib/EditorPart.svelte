<div class='editor-part'>
    {#if (noUnitAvailable)}
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
    import { EducationEnvironment } from 'education-dsl/src/freon/config/gen/EducationEnvironment';
    import { FreEditor, InMemoryModel, LionWebRepositoryCommunication, ServerCommunication } from '@freon4dsl/core';
    import { Education, Flow, Topic } from 'education-dsl/src/freon';

    let editor: FreEditor = EducationEnvironment.getInstance().editor;
    let noUnitAvailable: boolean = true;
    $: noUnitAvailable = !!editor ? !!editor.rootElement : true;

    async function getAllModels() {
        let server = new ServerCommunication();
        // let server = new LionWebRepositoryCommunication();
        let inMemoryModel: InMemoryModel = new InMemoryModel(EducationEnvironment.getInstance(), server);
        let originalModel: Education = (await inMemoryModel.createModel("ServerModel271")) as Education;
        // const unit1 = (await inMemoryModel.createUnit("dataUnit1", "Topic")) as Topic;

        console.log(originalModel.name);
        let unit = new Topic("UNIT34");
        unit.name = "UNIT34-name"
        originalModel.addUnit(unit);
        console.log("UNIT: "+ originalModel.getUnits().length + ", unit: " + originalModel.getUnits()[0].name)
        console.log("topics: " + originalModel.topic.map(u => u.$id))
        await inMemoryModel.saveUnit(unit);

        const allModels = (await inMemoryModel.getModels());

        const model1 = (await inMemoryModel.openModel(allModels[0])) as Education;
        console.log("Models: " + allModels.map(model => model) + "\n Opening model: " + allModels[0]);
        // let unit = model1.getUnits()[0];

    }
    // getAllModels();

    function createModelAndUnit() {
        let myModel: Education = Education.create({name: "MyFirstModel"});
        myModel.addUnit(Topic.create({name: "Unit1-Topic1"}));
        myModel.addUnit(Topic.create({name: "Unit1-Topic2"}));
        myModel.addUnit(Flow.create({name: "Unit-Flow1"}));
        console.log("Units: " + myModel.getUnits().map(u => u.name));
        EducationEnvironment.getInstance().editor.rootElement = myModel.getUnits()[0];
    }
    createModelAndUnit();
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
