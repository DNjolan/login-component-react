import { useState } from "react"

type LoginSubmit = {
    onLogin: () => void
}

async function promesa(ms: number, pass: boolean): Promise<object> {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            return pass ? resolve({message: pass}) : reject({message: 'Error'})
        }, ms)
    })
}

const Login: React.FC<LoginSubmit> = ({onLogin}) => {
    const [dataForm, setDataForm] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        
        setDataForm({
            ...dataForm,
            [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Lógica, petición fetch, validación, etc...
        try {
            const fetchPromise = await promesa(5000, false)
            if (fetchPromise) onLogin()
            return 'Error'
        } catch (error) {
            setDataForm({
                email: '',
                password: ''
            })
            console.log(error)
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={dataForm.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Enviar"
                />
            </div>
        </form>
        </>
    )
}

export default Login