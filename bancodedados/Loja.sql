-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 06/11/2018 às 17:33
-- Versão do servidor: 10.1.32-MariaDB
-- Versão do PHP: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `Loja`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `estoque`
--

CREATE TABLE `estoque` (
  `id` int(11) NOT NULL,
  `id_produto` int(11) NOT NULL,
  `quantidade` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `estoque`
--

INSERT INTO `estoque` (`id`, `id_produto`, `quantidade`) VALUES
(1, 1, 30),
(2, 2, 50),
(3, 3, 100),
(4, 4, 25),
(5, 5, 70);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(100) NOT NULL,
  `imagem` varchar(800) NOT NULL,
  `estoque` int(11) NOT NULL,
  `preco` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `descricao`, `imagem`, `estoque`, `preco`) VALUES
(1, 'Moletom Hogwarts', 'Moletom preto e cinza hogwarts', 'https://http2.mlstatic.com/blusa-moletom-harry-potter-hogwarts-school-bruxo-capuz-D_NQ_NP_232405-MLB20869790778_092016-F.jpg', 1, 200),
(2, 'Viratempo', 'Viratempo harry potter', 'https://http2.mlstatic.com/colar-vira-tempo-harry-potter-hermione-frete-gratis--D_NQ_NP_662601-MLB20369441757_082015-F.jpg', 2, 25),
(3, 'Tênis Harry Potter', 'Tênis Harry Potter Converse', 'http://pm1.narvii.com/6400/7ba3742c2aeeb8da5540800223dd65bc36b91f5d_00.jpg', 3, 180),
(4, 'Kit varinhas', 'Varinhas harry potter', 'https://img.clasf.com.br/2018/04/15/Varinhas-Harry-Potter-modelos-nicos-20180415005526.7414320015.jpg', 4, 250);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(80) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Fazendo dump de dados para tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'Josineide', 'josineide@gmail.com', '127697'),
(2, 'Pedro', 'pedro@gmail.com', 'rtt456'),
(3, 'Augusto', 'ang56@gmail.com', '456uii9');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `estoque`
--
ALTER TABLE `estoque`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estoque-produto` (`estoque`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `estoque-produto` FOREIGN KEY (`estoque`) REFERENCES `estoque` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
