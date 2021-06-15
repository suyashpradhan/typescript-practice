type HeaderProps = {
  name: String;
  score: Number;
};

export const Header = ({ name, score }: HeaderProps) => {
  return (
    <>
      <h2>Welcome {name}</h2>
      <p>Score {score}</p>
    </>
  );
};
