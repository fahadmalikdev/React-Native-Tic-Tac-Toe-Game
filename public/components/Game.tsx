import {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import Board from './Board';

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const OrderedList = ({children}: any) => {
    return <View>{children}</View>;
  };

  const ListItem = ({children}: any) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{children}</Text>
      </View>
    );
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <ListItem key={move}>
        <TouchableOpacity onPress={() => jumpTo(move)}>
          <Text>{description}</Text>
        </TouchableOpacity>
      </ListItem>
    );
  });

  return (
    <>
      <View style={styles.game}>
        <View style={styles.gameBoard}>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </View>
        <View style={styles.gameInfo}>
          <Text>Time Travel</Text>
          <Text>Click on below moves to go back.</Text>
          <OrderedList>{moves}</OrderedList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  game: {},
  gameBoard: {},
  gameInfo: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 20,
  },
  listItemText: {
    marginRight: 5,
  },
});

export default Game;
