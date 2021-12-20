const Home = () => {
    return (
        <>
            <h1>This is Home</h1>
            <h4>로그인</h4>
            <form>
                <label>ID : </label>
                <input type="text"/>
                <label>PW : </label>
                <input type="text"/>
                <button type="submit">LogIn</button>
            </form>
        </>
    );
};

export default Home;