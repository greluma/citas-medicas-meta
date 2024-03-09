interface ContainerProps {
  children: React.ReactNode;
  clases: string;
}

const Container = ({ children, clases }: ContainerProps) => {
  return <div className={clases}>{children}</div>;
};
export default Container;
