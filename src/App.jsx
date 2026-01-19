export default function App() {
  const products = [
    { id: "1", name: "зонтик" },
    { id: "2", name: "ноутбук" },
    { id: "3", name: "телефон" },
    { id: "4", name: "коврик для мыши" },
    { id: "5", name: "мышь" },
    { id: "6", name: "футболка" },
    { id: "7", name: "ручка" },
    { id: "8", name: "штаны" },
    { id: "9", name: "компьютер" },
  ];

  const images = [
    "https://avatars.mds.yandex.net/i?id=80058fc74ee95cd5eef0e1954a625b27cd2e57e0-4476958-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=d3b07e1ddee61225e5000130997b0af5097c2f8a-5524081-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=3324a1ad889680bda04f98016d5ef9fc1ce64680-11777771-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=26e6b113e382224eeaf569105ed8f31bb78d9369-10089679-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=cdb74525dee5ac783a156534f4e6b1d1836619e2-17844114-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=a31ff77777f7441297b2cd60eb49047075844a1b-11777771-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=a32fadfaaaf3ac1e0e5159b85eacd948e8766aae-16316409-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=641efb88f84fe1ecab1c05d1d7eb19ea63d8a3ae-4145917-images-thumbs&n=13",
    "https://avatars.mds.yandex.net/i?id=3a30ea6e49a77c7675d75e70f809315496add0e5-5276739-images-thumbs&n=13",
  ];

  return (
    
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center"
    }
    }
    >
      <h1>Магазин</h1>
      {products.map((item, index) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
            width: 200,
          }}
        >
          <img
            src={images[index]}
            alt={item.name}
            style={{ width: "100%", height: 120, objectFit: "cover" }}
          />

          <p>{item.name}</p>

          <button onClick={() => console.log(item.id, item.name)}>
            Buy now
          </button>
        </div>
      ))}
    </div>
  );
}
