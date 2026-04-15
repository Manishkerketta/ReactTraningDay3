import styled from 'styled-components';

const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  color: white;
  background-color: ${(props) => {
    if (props.type === 'success') return 'green';
    if (props.type === 'error') return 'red';
    return 'gray'; 
  }};
`;
export default function StatusCard() {
  return (
    <div>
      <Card type="success">I am a Success Card!</Card>
      <Card type="error">I am an Error Card!</Card>
      <Card>I am a Default Card!</Card>
    </div>
  );
}