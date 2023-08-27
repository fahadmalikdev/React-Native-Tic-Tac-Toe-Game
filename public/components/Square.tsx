import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function Square({value, onSquareClick}: any) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <TouchableOpacity
      style={styles.square}
      onPress={onSquareClick}
      data-value={value}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  square: {
    flex: 1,
    aspectRatio: 1,
    minWidth: 100,
    maxWidth: 100,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#fff',
  },
  text: {
    fontSize: 60,
  },
});

export default Square;
