/**
 *  Хранение отметок "не прочитано"
 */

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];


  let isReadied = new WeakSet();

  isReadied.add(messages[i]);

  alert(isReadied.has(messages[i])? 'Message is readied': 'Message is not readied');


  /**
   * Хранение времени прочтения
   */


  let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  let timeReadied = new WeakSeMap();
  timeReadied.set(messages[i], new Date().getTime());
  