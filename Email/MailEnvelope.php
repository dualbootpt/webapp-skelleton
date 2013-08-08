<?php

/**
 * Description of Sendmail
 * Sendmail - text mail
 * Sendmail - html + alternative plain text
 * Sendmail - attachments
 *
 * @author romualdo <paulo.romualdo at dualboot.pt>
 */

class MailEnvelope {
    
    private $_from,
            $_to,
            $_subject = " ",
            $_message = " ";
    
    /**
     * 
     * Sets the TO: field
     * 
     * @param string $to - Coma separated list of destination e-mail addresses
     */
    public function setTo($to) {
        
        $this->_to = $to;
        return $this;
    }
    
    /**
     * 
     * Sets the FROM: field
     * 
     * @param string $from - Sender's e-mail addresses
     */
    public function setFrom($from) {
        
        $this->_from = $from;
        return $this;
    }
    
    /**
     * 
     * Sets the SUBJECT: field
     * 
     * @param string $subject - The e-mail subject
     */
    public function setSubject($subject) {
        /*
         * =?charset?encoding?encoded text?=
         * 
         * O charset é frequentemente utf-8, mas pode ser qualquer caracter registrado com a IANA. iso-2022-jp é comum no Japão.
         * iso-8859-1 e mais recentemente iso-8859-15 são comuns no leste europeu.
         * encoding pode ser um "Q" denotando a codificação da quoted-printable ou "B" que denota a codificação base64.
         * encoded text (codificação do texto) é o texto da "quoted-printable" ou de "base64-encoded".
         * Por exemplo,
         * Subject: =?utf-8?Q?=C2=A1Hola,=20se=C3=B1or!?=
         */
                
        $this->_subject = sprintf("=?%s?%s?%s?=", 'utf-8', 'B', base64_encode($subject));
        return $this;
    }
    
    /**
     * 
     * Sets the MESSAGE: field
     * 
     * @param string $msg - The e-mail's content
     */
    public function setMessage($msg) {
        /*
         * =?charset?encoding?encoded text?=
         * 
         * O charset é frequentemente utf-8, mas pode ser qualquer caracter registrado com a IANA. iso-2022-jp é comum no Japão.
         * iso-8859-1 e mais recentemente iso-8859-15 são comuns no leste europeu.
         * encoding pode ser um "Q" denotando a codificação da quoted-printable ou "B" que denota a codificação base64.
         * encoded text (codificação do texto) é o texto da "quoted-printable" ou de "base64-encoded".
         * Por exemplo,
         * Subject: =?utf-8?Q?=C2=A1Hola,=20se=C3=B1or!?=
         */
        
        $this->_message = $msg;
        return $this;
    }
    
    /*
     * @todo Implement the attachement part - this is just a copy of sendHTML
     */
    public function sendWithAttach() {
        
        $random_hash = md5(date('r', time())); 
        
        $headers = 'From: ' . $this->_from;
        $headers .= "\r\n";
        $headers .= 'Content-Type: multipart/alternative; boundary="BlockSeparator-' . $random_hash . '"';
        $msg = '--' . 'BlockSeparator-' . $random_hash;
        $msg .= "\r\n";
        $msg .= 'Content-Type: text/plain;';
        $msg .= "\r\n";
        $msg .= 'charset="iso-8859-1"';
        $msg .= "\r\n";
        $msg .= 'Content-Transfer-Encoding: 7bit';
        $msg .= "\r\n\r\n";
        $msg .= iconv("UTF-8", "ISO-8859-1//TRANSLIT", strip_tags($this->_message));
        $msg .= "\r\n";
        $msg .= '--' . 'BlockSeparator-' . $random_hash;
        $msg .= "\r\n";
        $msg .= 'Content-type: text/html;' . 'charset="iso-8859-1"';
        $msg .= "\r\n";
        $msg .= 'Content-transfer-encoding: 7bit;';
        $msg .= "\r\n\r\n";
        $msg .= iconv("UTF-8", "ISO-8859-1//TRANSLIT", $this->_message);
        $msg .= "\r\n";
        $msg .= '--' . 'BlockSeparator-' . $random_hash . '--';
        $sent = mail( $this->_to, $this->_subject, $msg, $headers );
        return $sent;
    }
    
    /**
     * 
     * Sends an e-mail in HTML format with an alternative version in plain txt
     * 
     * @return bool
     */
    public function sendHTML() {
        
        $random_hash = md5(date('r', time())); 
        
        $headers = 'From: ' . $this->_from;
        $headers .= "\r\n";
        $headers .= 'Content-Type: multipart/alternative; boundary="BlockSeparator-' . $random_hash . '"';
        $msg = '--' . 'BlockSeparator-' . $random_hash;
        $msg .= "\r\n";
        $msg .= 'Content-Type: text/plain;';
        $msg .= "\r\n";
        $msg .= 'charset="iso-8859-1"';
        $msg .= "\r\n";
        $msg .= 'Content-Transfer-Encoding: 7bit';
        $msg .= "\r\n\r\n";
        $msg .= iconv("UTF-8", "ISO-8859-1//TRANSLIT", strip_tags($this->_message));
        $msg .= "\r\n";
        $msg .= '--' . 'BlockSeparator-' . $random_hash;
        $msg .= "\r\n";
        $msg .= 'Content-type: text/html;' . 'charset="iso-8859-1"';
        $msg .= "\r\n";
        $msg .= 'Content-transfer-encoding: 7bit;';
        $msg .= "\r\n\r\n";
        $msg .= iconv("UTF-8", "ISO-8859-1//TRANSLIT", $this->_message);
        $msg .= "\r\n";
        $msg .= '--' . 'BlockSeparator-' . $random_hash . '--';
        $sent = mail( $this->_to, $this->_subject, $msg, $headers );
        return $sent;
    }
    
        /**
        * 
        * Sends an e-mail in plain txt format
        * 
        * @return bool
        */
        public function sendTXT() {
        
        $headers = 'From: ' . $this->_from;
        $headers .= "\r\n";
        $headers .= 'Content-Type: text/plain;' . ' charset="iso-8859-1";' . ' Content-Transfer-Encoding: 7bit;';
        $msg .= "\r\n\r\n";
        $msg .= iconv("UTF-8", "ISO-8859-1//TRANSLIT", $this->_message);
        $msg .= "\r\n";
        $sent = mail( $this->_to, $this->_subject, $msg, $headers );
        return $sent;
    }
}

?>
