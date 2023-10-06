import Paragraph from "./Paragraph";

function Main({ content }) {

    const renderedElements = content.map((elem, i) => <Paragraph key={i}>{elem}</Paragraph> )

    return (  
        <main>
            {renderedElements}
        </main>
    );
}

export default Main;