import CardTable from "./CardTable";

export default function CardsTable({ position, rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <CardTable position={[-4, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      <CardTable position={[4, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
    </group>
  );
}
