function Menu() {
    const items = [
        'Acerca de','Fotografia comercial','Fotografia artistica','Fotografia estenopeica'
    ];


  return (
    <>
    <h1>Titulo de la pagina</h1>
    <div className="list-group">
        {items.map((item) => (
        <li key={item} className="list-group-item list-group-item-action">
            {item}
        </li>
        ))}
    </div>
    </>
  );
}

export default Menu;
