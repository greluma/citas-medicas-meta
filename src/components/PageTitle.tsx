interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="page-title">
      <h2>{title}</h2>
    </div>
  );
};
export default PageTitle;
