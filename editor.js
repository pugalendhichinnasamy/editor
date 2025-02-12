const editor = new EditorJS({
    holder: 'editorjs',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true
        },
        list: {
            class: List,
            inlineToolbar: true
        }
    }
});

function savePost() {
    editor.save().then((outputData) => {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(outputData);
        localStorage.setItem('posts', JSON.stringify(posts));
        alert("Post saved!");
    }).catch((error) => {
        console.log('Saving failed: ', error);
    });
}
