const User = require('../models/users.model');
const bcrypt = require('bcrypt');  // Asegúrate de encriptar contraseñas al almacenarlas
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

exports.update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.update(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

exports.delete = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    await user.destroy();
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
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verifica la contraseña
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si es válido, genera un token o retorna los datos del usuario
    const token = jwt.sign({ id_user: user.id_user, rol: user.rol }, jwtSecret, { expiresIn: '8h' });

    res.json({
      id_user: user.id_user,
      nombre: user.nombre,
      apellido: user.apellido,
      rol: user.rol,
      email: user.email,
      token: token  // Retorna un token si estás usando JWT
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};
