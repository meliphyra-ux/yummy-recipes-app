import StyledInstruction from './StyledInstruction';

const Instruction = ({
  text,
  orderNumber,
}: {
  text: string;
  orderNumber: number;
}) => {
  return (
    <StyledInstruction>
      <h3>{orderNumber}:</h3>
      <p>{text}</p>
    </StyledInstruction>
  );
};

export default Instruction;
