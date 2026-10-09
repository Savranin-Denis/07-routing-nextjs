type Props = {
  children: React.ReactNode;
};

const NotesLayout = ({ children }: Props) => {
  return (
    <div>
      <section>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default NotesLayout;
