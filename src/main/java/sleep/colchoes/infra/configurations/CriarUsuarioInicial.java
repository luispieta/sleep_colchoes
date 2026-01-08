package sleep.colchoes.infra.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import sleep.colchoes.domain.usuario.Usuario;
import sleep.colchoes.domain.usuario.UsuarioRepository;

@Component
public class CriarUsuarioInicial implements CommandLineRunner {

    @Autowired
    private UsuarioRepository repository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public void run(String... args) {
        if (repository.count() == 0) {
            Usuario usuario = new Usuario(
                    null,
                    "admin",
                    encoder.encode("123456")
            );
            repository.save(usuario);
        }
    }
}

