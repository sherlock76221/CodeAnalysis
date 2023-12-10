package demo1;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class denglu extends JFrame {
    public static String DQuser = null;
    public static boolean isOK = false;
    JLabel a1;
    JLabel a2;

    JButton b1;
    JButton b2;
    JButton b3;
    JButton b4;

    JTextField c1;
    JPasswordField c2;
    public denglu(){
        this.setTitle("用户登录");
        setBounds(0,0,700,700);
        init();
        setLayout(null);
        setVisible(true);
        setLocationRelativeTo(null);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }

    private void init() {
        Container ft = this.getContentPane();
        c1 = new JTextField();
        c2 = new JPasswordField();
        c1.setBounds(100,100,100,50);
        c2.setBounds(100,200,100,50);
        a1 = new JLabel();
        a1.setBounds(0,0,1000,1000);

        b1 = new JButton("登录");
        b1.setBounds(100,300,100,100);
        b1.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == b1){
                    String name = c1.getText();
                    String password = String.valueOf(c2.getPassword());
                    if(name.length() <=0){
                        JOptionPane.showMessageDialog(null,"请输入账号");
                    }else {
                        if(password.length() <= 0){
                            JOptionPane.showMessageDialog(null,"请输入密码");
                        }else {
                            sql dl = new sql(name,password);
                            dl.DL();
                            dispose();
                        }
                    }
                }
            }
        });

        b2 = new JButton("注册");
        b2.setBounds(300,300,100,100);
        b2.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == b2){
                    String name = JOptionPane.showInputDialog(null,"输入注册账号：","注册",JOptionPane.PLAIN_MESSAGE);
                    String password = JOptionPane.showInputDialog(null,"请输入密码：","注册",JOptionPane.PLAIN_MESSAGE);
                    if(name.length() <= 0 && password.length() <=0){
                        JOptionPane.showMessageDialog(null,"请输入要注册的账号或者密码");
                    }else {
                        sql zc = new sql(name,password);
                        zc.ZC();
                    }
                }
            }
        });

        b3 = new JButton("修改");
        b3.setBounds(300,450,100,100);
        b3.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == b3){
                    String name = JOptionPane.showInputDialog(null,"输入注册账号：","修改",JOptionPane.PLAIN_MESSAGE);
                    String password = JOptionPane.showInputDialog(null,"请输入密码：","修改",JOptionPane.PLAIN_MESSAGE);
                    if(name.length() <=0 || password.length() <= 0){
                        JOptionPane.showMessageDialog(null,"请输入要修改的账号和密码");
                    }else {
                        sql xg = new sql(name,password);
                        xg.XG();
                    }
                }
            }
        });

        b4 = new JButton("注销");
        b4.setBounds(100,450,100,100);
        b4.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                if(e.getSource() == b4){
                    String name = JOptionPane.showInputDialog(null,"输入要删除的账号：","修改",JOptionPane.PLAIN_MESSAGE);
                    String password = JOptionPane.showInputDialog(null,"请输入密码：","修改",JOptionPane.PLAIN_MESSAGE);
                    if(name.length() <=0 || password.length() <= 0){
                        JOptionPane.showMessageDialog(null,"请输入要修改的账号和密码");
                    }else {
                        sql sc = new sql(name,password);
                        sc.SC();
                    }
                }
            }
        });

        ft.add(a1);
        ft.add(b1);
        ft.add(b2);
        ft.add(b3);
        ft.add(b4);
        ft.add(c1);
        ft.add(c2);
    }
}
