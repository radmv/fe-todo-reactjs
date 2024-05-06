import Button from "../Button";

const BottomButton = (props) => {
  const { onClick = () => {} } = props;
  return (
    <Button
      variant="fixed bottom-0 right-0 bg-blue-600 w-fit block md:hidden shadow-lg"
      onClick={onClick}
    >
      Add Todo
    </Button>
  );
};

export default BottomButton;
