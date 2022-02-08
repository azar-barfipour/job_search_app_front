import Card from "../../atoms/card";
import classes from "./job-card.module.css";

const JobCard = (props) => {
  return (
    <Card className={classes[componentName]}>
      <h2 className={`${classes[componentName]}__title`}>{props.job.title}</h2>
      <div>
        {props.job.skills.map((skill) => (
          <div>{skill}</div>
        ))}
      </div>
    </Card>
  );
};

const componentName = "JobCard";

export default JobCard;