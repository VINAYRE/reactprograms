const list = ['Dong 1', 'Cow 2', 'cat 3'];
 
const SimpleList = () => (
    
    
  <ul>
    {list.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
 
);
