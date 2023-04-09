const skeleton = ({ item }) => {
  return [...Array(item).keys()].map(() => {
    <div className="animate">
      <div className="animate-div"></div>
    </div>;
  });
};

export default skeleton;
