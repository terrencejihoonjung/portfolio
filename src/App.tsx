type AppProps = {
  title: string;
};

function App({ title }: AppProps) {
  return (
    <>
      <div className="text-3xl">hi this is title: {title}</div>
    </>
  );
}

export default App;
