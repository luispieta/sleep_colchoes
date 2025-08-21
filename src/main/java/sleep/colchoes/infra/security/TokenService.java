//package sleep.colchoes.infra.security;
//
//import org.springframework.stereotype.Service;
//import sleep.colchoes.domain.usuario.Usuario;
//import java.time.Instant;
//import java.time.LocalDate;
//import java.time.ZoneOffset;
//
//@Service
//public class TokenService {
//
//    private String secret;
//
////    public String gerarToken(Usuario usuario) {
////        try {
////            //Aqui realiza a senha secreta
////            var algoritmo = Algorithm.HMAC256(secret);
////            return JWT.create()
////                    .withIssuer("API Voll.med")
////                    .withSubject(usuario.getLogin())
////                    .withClaim("id", usuario.getId())
////                    .withExpiresAt(dataExpiracao())
////                    .sign(algoritmo);
////
////        } catch (JWTCreationException exception){
////            throw  new RuntimeException("erro ao gerar token JWT", exception);
////        }
////
////    }
////
////    private Instant dataExpiracao() {
////        return LocalDate.now().plusDays(7).atStartOfDay().toInstant(ZoneOffset.of("-03:00"));
////
////    }
//
//}
