import ReactMarkdown from "https://esm.sh/react-markdown@7";

export const ClaudeRecipe = (props) => {
  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
};
