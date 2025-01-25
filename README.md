This project is in development. 

The project is meant to contain the example for the Freon website that explains how to 
integrate the Freon editor with a custom web application. 

So far, it is clear that 
1. the Freon generated parser, which uses AGL, gives errors because it is a common js package,
2. the InMemoryModel class in freon/core should be slightly changed, because it is unclear whether
to use its interface or the 'normal' addUnit etc. in FreModel,
3. the setting of the editor's rootElement should be contained in an ASTchange,
4. the asynchronicity of the server may cause problems with the syncing of the Svelte components.

Development of this project will continue after the release of Freon version 1.0.0.
