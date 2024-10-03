const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');  // Asegúrate de encriptar contraseñas al almacenarlas
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

exports.create = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

exports.getById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

exports.update = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await usuario.update(req.body);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

exports.delete = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await usuario.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10;

const pass = password;  // La contraseña sin encriptar
const hashedPassword = await bcrypt.hash(pass, saltRounds);
console.log(hashedPassword);

  try {
    // Busca el usuario por email
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const validPassword = await bcrypt.compare(password, usuario.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si es válido, genera un token o retorna los datos del usuario
    const token = jwt.sign({ id_usuario: usuario.id_usuario, rol: usuario.rol }, jwtSecret, { expiresIn: '8h' });

    res.json({
      id_usuario: usuario.id_usuario,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      rol: usuario.rol,
      email: usuario.email,
      token: token  // Retorna un token si estás usando JWT
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
