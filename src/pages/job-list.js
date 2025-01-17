import { useEffect, useState } from "react";
import JobCardList from "../components/organisms/job-list/job-card-list";
import JobSearch from "../components/organisms/job-list/job-search";
import classes from "./job-list.module.css";

const JobList = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/jobs`
        );

        const responseData = await response.json();
        setJobList(responseData.jobs);
      } catch (err) {
        console.log(err);
      }
    };

    fetchJobList();
  }, []);

  return (
    <div className={classes[componentName]}>
      <JobCardList jobList={jobList} />
    </div>
  );
};

const componentName = "JobList";

export default JobList;
