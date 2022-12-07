import './App.css';

function App() {
  return (
    <div class="App-header">
      <div>

        <div class= "App-text">
        Bem-vindo a loja de Tapas!
        </div>

        <div class="App-image">
        <img src='tapas-espanholas.webp' alt= "" />
        </div>

        <p class="App-text-two">

          <form>
            <div>
            <label>
              Nome:
              <input type="text" name="name" required />
            </label>
            </div>
            
            <div>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            </div>

            <div>
            <label>
              Senha:
              <input type="password" name="senha" required />
            </label>
            </div>
                  
            <input type="submit" value="Cadastrar" />
          </form>
         
        </p>

        
      </div>

    </div>
     
    
  
  );
}

export default App;
