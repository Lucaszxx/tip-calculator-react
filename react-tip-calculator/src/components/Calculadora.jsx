export function Calculadora() {
    return (
        <main>
            <form action="">
                <div className="bill">
                    <label htmlFor="">Conta</label>
                    <div className="input-box">
                        <input type="number" id="bill" placeholder="0" />
                    </div>
                </div>
                <div className="tip-percentage">
                    <label htmlFor="">Selecione a porcentagem %</label>
                    <div>
                        <input type="button" value="5%" />
                        <input type="button" value="10%" />
                        <input type="button" value="15%" />
                        <input type="button" value="25%" />
                        <input type="button" value="50%" />
                        <input type="number" id="custom" placeholder="Outra" />
                    </div>
                </div>

                <div className="people">
                    <label htmlFor="">Número de pessoas</label>
                    <div className="input-box">
                        <input type="number" id="people" placeholder="0"/>
                    </div>
                </div>
            </form>

            <section>
                <div className="results">
                    <div className="tip-amount">
                        <p>
                            Gorjeta <br />
                            <span>/ pessoa</span>
                        </p>
                        <p>R$0.00</p>
                    </div>
                </div>
                <div className="total">
                    <p>
                        Total <br />
                        <span>/ pessoa</span>
                    </p>
                    <p>R$0.00</p>
                </div>
                <button>Limpar</button>
            </section>
        </main>
    )
}