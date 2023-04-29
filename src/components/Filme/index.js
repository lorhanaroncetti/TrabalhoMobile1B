import { TouchableOpacity, View } from "react-native-web";
import styles from "./style";
import { Image, Text } from "react-native";

export default function Filme(props){
    return(
        <View style={styles.card_filme}>
            <View style={styles.infos}>
                <View style={styles.infos_imagem}>
                    <Image
                        style={styles.imagem}
                        source={{ uri: 'https://api.otaviolube.com' + props.filme.attributes.poster.data.attributes.url}}>
                    </Image>
                </View>
                <View style={styles.infos_texto}>
                    <Text style={styles.texto_titulo}>
                        {props.filme.attributes.titulo}
                    </Text>
                    <Text style={styles.texto_subtitulo}>
                        {props.filme.attributes.subtitulo}
                    </Text>
                    <Text style={styles.texto_sinopse}>
                        {props.filme.attributes.sinopse.slice(0,280) + '...'}
                    </Text>
                </View>
            </View>
            <View styles={styles.botao}>
                <TouchableOpacity style={styles.botao_botao}>
                    <Text style={styles.botao_text}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )

}
