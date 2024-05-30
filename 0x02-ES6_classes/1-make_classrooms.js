import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRooms = [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];

  const objects = [];
  for (let i = 0; i < classRooms.length; i += 1) {
    objects.push(classRooms[i]);
  }

  return objects;
}
