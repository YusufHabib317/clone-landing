type TagProps = {
  text: string;
};
export function Tag(props: TagProps) {
  const { text } = props;
  return <div className="tag">{text}</div>;
}
