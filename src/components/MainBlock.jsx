import "../styles/training.css"
import "../styles/main-block-md.css"
import 'katex/dist/katex.min.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const theory = import.meta.glob("/src/content/theory/*.md", { as: 'raw', eager: true });
const materials = import.meta.glob("/src/content/materials/*.md", { as: 'raw', eager: true });

function MainBlock({ activeId, type }) {
    const currentFiles = type === 'theory' ? theory : materials;

    console.log("Ключи в проде:", Object.keys(currentFiles));

    const targetKey = Object.keys(currentFiles).find(key => {
        const fileName = key.split('/').pop();
        return fileName === `${activeId}.md`;
    });

    console.log("Ищем файл для ID:", activeId);
    console.log("Найденный ключ:", targetKey);

    const content = targetKey ? currentFiles[targetKey] : "Загрузка или файл не найден...";
    console.error("Доступные ключи в текущем типе:", Object.keys(currentFiles));
    return (
        <div id="MainBlock">
            <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default MainBlock