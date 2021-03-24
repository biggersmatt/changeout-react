import { Droppable } from 'react-beautiful-dnd';
import EndcapCard from '../Endcaps/EndcapCard';

const EndcapsList = (props) => {
    return (
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          // id={snapshot.isDraggingOver}
        >
          {props.endcaps.map((endcap, index) => {
            return <EndcapCard 
                      handleToggleEndcap={props.handleToggleEndcap}
                      handleToggleFlank={props.handleToggleFlank}
                      key={endcap._id} 
                      index={index} 
                      endcap={endcap}
                      flankA={endcap.flankA}
                      flankB={endcap.flankB}
                    />
          })}
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    )
};

export default EndcapsList;