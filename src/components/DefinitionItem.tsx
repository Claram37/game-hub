interface Props {
  term: string;
  children: React.ReactNode;
}
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <div className="col mb-4">
      <dt className="text-body-secondary fs-5">{term}</dt>
      <dd>{children}</dd>
    </div>
  );
};

export default DefinitionItem;
