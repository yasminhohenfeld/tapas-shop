import './App.css';

function App() {
  return (
    <div class="App-header">
      
        <div class="box">
          <div class= "App-text">
          LOJA DE TAPAS
          </div>

          <p class="form">
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
                    
              <input class="btn" type="submit" value="Cadastrar" />
            </form>
          
          </p>
        </div>

        {/* <div class="App-image">
        <img src='tapas-espanholas.webp' alt= "" />
        </div> */}

        
     

    </div>
     
    
  
  );
}

export default App;
