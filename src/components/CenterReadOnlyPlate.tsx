
interface ICenterReadOnlyPlateProps {
  centerInfo: string | null;
}

const CenterReadOnlyPlate = ({ centerInfo }: ICenterReadOnlyPlateProps) => {
  return (
    <div>
      <h2>Center Read-Only Plate</h2>
      <p>This is a read-only plate for center information. It displays details about the center without allowing any edits.</p>
      <p>Center Information: {centerInfo ? centerInfo : "No information available"}</p>
    </div>
  )
}



export default CenterReadOnlyPlate
