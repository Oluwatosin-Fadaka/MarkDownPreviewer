
const defaultContent = `
![FreeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)

# Heading 1 
## Heading 2
### Heading 3


\`<div>Inline code</div>\`

\`\`\`
const addTwoNumbers = (a, b) => {
     
        return a + b
    
}
\`\`\`

**Some bold text**

[Sign up on FreeCodeCamp for free](https://www.freecodecamp.org/learn)

> Block Quote

1. First list item
2. Second list item
`

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => 
  <textarea value={content} onChange={handleTextareaChange} id="editor" />

const Previewer = ({content}) => (
  <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked.parse(content, { renderer: renderer })
    }}
  />
);

const App = () => {
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) => {
    setContent(event.target.value)
  }

  return (
    <div class="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Previewer content={content} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));



//source : https://codepen.io/dwinatech/pen/qBmaxxZ
