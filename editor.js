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
        const post = { content: JSON.stringify(outputData) };
        fetch('posts.json')
            .then(response => response.json())
            .then(posts => {
                posts.push(post);
                return fetch('posts.json', {
                    method: 'PUT',
                    body: JSON.stringify(posts),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            })
            .then(() => alert("Post saved!"));
    }).catch((error) => {
        console.log('Saving failed: ', error);
    });
}
