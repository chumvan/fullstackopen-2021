import React from 'react';
import { Icon, Segment, SegmentGroup } from 'semantic-ui-react';
import Diagnosis from '../components/Diagnosis';
import SickLeaveComponent from '../components/SickLeaveComponent';
import { OccupationalHealthcareEntry } from '../types';

const OccupationalHealthcareEntryComponent = ({
  entry,
}: {
  entry: OccupationalHealthcareEntry;
}): JSX.Element => {
  return (
    <Segment>
      <div>
        <h4>{entry.date}</h4>
        <span>
          <Icon name='handshake outline' size='big' />
          <p>Employed by {entry.employerName}</p>
        </span>
      </div>
      <p>{entry.description}</p>
      <SegmentGroup>
        <Segment>
          <Diagnosis
            diagnosisCodes={entry.diagnosisCodes}
            id={entry.id}
          ></Diagnosis>
        </Segment>
        <Segment>
          <SickLeaveComponent sickLeave={entry.sickLeave} />
        </Segment>
      </SegmentGroup>
    </Segment>
  );
};

export default OccupationalHealthcareEntryComponent;
