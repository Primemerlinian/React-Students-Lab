import Score from './Score';

const Student = (props) => {
  return ( 
    <>
    <h2>{props.student.name}</h2>
    <h3>{props.student.bio}</h3>
    <h2>Scores</h2>
    { props.student.scores.map((score , idx) =>
      <Score 
      key={idx} 
      score={score}
      />
      )}
    </>
  );
}

export default Student;