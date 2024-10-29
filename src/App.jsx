import UserTable from "./UserTable";

const users = [
  { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
  { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "234-567-8901",
  },
  { name: "Bob Brown", email: "bob.brown@example.com", phone: "345-678-9012" },
  {
    name: "Charlie Black",
    email: "charlie.black@example.com",
    phone: "456-789-0123",
  },
  {
    name: "David Green",
    email: "david.green@example.com",
    phone: "567-890-1234",
  },
  { name: "Eva White", email: "eva.white@example.com", phone: "678-901-2345" },
  {
    name: "Frank Silver",
    email: "frank.silver@example.com",
    phone: "789-012-3456",
  },
  {
    name: "Grace Gold",
    email: "grace.gold@example.com",
    phone: "890-123-4567",
  },
  {
    name: "Henry Orange",
    email: "henry.orange@example.com",
    phone: "901-234-5678",
  },
  {
    name: "Isabel Blue",
    email: "isabel.blue@example.com",
    phone: "012-345-6789",
  },
  { name: "Jack Red", email: "jack.red@example.com", phone: "111-222-3333" },
  {
    name: "Kelly Purple",
    email: "kelly.purple@example.com",
    phone: "222-333-4444",
  },
  { name: "Leo Gray", email: "leo.gray@example.com", phone: "333-444-5555" },
  {
    name: "Mia Yellow",
    email: "mia.yellow@example.com",
    phone: "444-555-6666",
  },
  { name: "Noah Pink", email: "noah.pink@example.com", phone: "555-666-7777" },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    phone: "666-777-8888",
  },
  {
    name: "Paul Violet",
    email: "paul.violet@example.com",
    phone: "777-888-9999",
  },
  {
    name: "Quinn Lime",
    email: "quinn.lime@example.com",
    phone: "888-999-0000",
  },
  {
    name: "Rachel Maroon",
    email: "rachel.maroon@example.com",
    phone: "999-000-1111",
  },
  {
    name: "Steve Cyan",
    email: "steve.cyan@example.com",
    phone: "111-111-1111",
  },
  {
    name: "Tina Olive",
    email: "tina.olive@example.com",
    phone: "222-222-2222",
  },
  {
    name: "Uma Indigo",
    email: "uma.indigo@example.com",
    phone: "333-333-3333",
  },
  {
    name: "Victor Brown",
    email: "victor.brown@example.com",
    phone: "444-444-4444",
  },
  {
    name: "Wendy Pink",
    email: "wendy.pink@example.com",
    phone: "555-555-5555",
  },
  {
    name: "Xander Blue",
    email: "xander.blue@example.com",
    phone: "666-666-6666",
  },
  { name: "Yara Gray", email: "yara.gray@example.com", phone: "777-777-7777" },
  {
    name: "tane White",
    email: "zane.white@example.com",
    phone: "888-888-8888",
  },
  {
    name: "Aiden Gold",
    email: "aiden.gold@example.com",
    phone: "999-999-9999",
  },
  {
    name: "Bella Silver",
    email: "bella.silver@example.com",
    phone: "000-000-0000",
  },
  {
    name: "Cameron Blue",
    email: "cameron.blue@example.com",
    phone: "123-123-1234",
  },
  {
    name: "Diana Orange",
    email: "diana.orange@example.com",
    phone: "234-234-2345",
  },
  {
    name: "Ethan Green",
    email: "ethan.green@example.com",
    phone: "345-345-3456",
  },
  {
    name: "Fiona Black",
    email: "fiona.black@example.com",
    phone: "456-456-4567",
  },
  {
    name: "George White",
    email: "george.white@example.com",
    phone: "567-567-5678",
  },
  { name: "Hazel Red", email: "hazel.red@example.com", phone: "678-678-6789" },
  {
    name: "Ian Yellow",
    email: "ian.yellow@example.com",
    phone: "789-789-7890",
  },
  {
    name: "Jill Purple",
    email: "jill.purple@example.com",
    phone: "890-890-8901",
  },
  {
    name: "Kevin Silver",
    email: "kevin.silver@example.com",
    phone: "901-901-9012",
  },
  { name: "Lily Gray", email: "lily.gray@example.com", phone: "012-012-0123" },
  {
    name: "Mark Brown",
    email: "mark.brown@example.com",
    phone: "123-123-2345",
  },
  { name: "Nina Gold", email: "nina.gold@example.com", phone: "234-234-3456" },
  {
    name: "Oscar Pink",
    email: "oscar.pink@example.com",
    phone: "345-345-4567",
  },
  {
    name: "Penny Violet",
    email: "penny.violet@example.com",
    phone: "456-456-5678",
  },
  {
    name: "Quincy Lime",
    email: "quincy.lime@example.com",
    phone: "567-567-6789",
  },
  {
    name: "Ruth Maroon",
    email: "ruth.maroon@example.com",
    phone: "678-678-7890",
  },
  { name: "Sam Olive", email: "sam.olive@example.com", phone: "789-789-8901" },
  {
    name: "Tara Indigo",
    email: "tara.indigo@example.com",
    phone: "890-890-9012",
  },
];

function App() {
  return (
    <>
      <div>
        <UserTable users={users} />
      </div>
    </>
  );
}

export default App;
