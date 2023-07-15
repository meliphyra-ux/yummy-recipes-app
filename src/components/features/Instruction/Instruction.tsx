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
      <strong>{orderNumber}:</strong>
      <p>
        <em>{text}</em>
      </p>
    </StyledInstruction>
  );
};

export default Instruction;
