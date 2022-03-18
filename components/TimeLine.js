import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

export default function OppositeContentTimeline() {
  return (
    <React.Fragment>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="#aaa">2015</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>High School</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="#aaa">2018</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Bachelor</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="#aaa">2022</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Master</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary"></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Doctoral</TimelineContent>
        </TimelineItem>
      </Timeline>
    </React.Fragment>
  );
}
