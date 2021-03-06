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
                      key={index} 
                      index={index} 
                      endcap={endcap}
                    />
          })}
          {provided.placeholder}
        </div>
        )}
      </Droppable>
    )
};

export default EndcapsList;