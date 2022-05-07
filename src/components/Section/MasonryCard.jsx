import { styled } from 'styled-components';

function MansonryCard({ nbColumn, children }) {
  const tab = [];
  for (let i = 0; i < nbColumn; i++) {
    tab[i] = [];
  }
  for (let child of children) {
    console.log(child.props.ref);
    // console.log(child.ref.current.clientHeight);
  }
  console.log(JSON.stringify(tab));
  return <>{children.map((e) => e)}</>;
}
export default MansonryCard;
